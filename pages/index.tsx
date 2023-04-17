import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, CardImage, CardContent, CardTitle, PaginationContainer, PaginationButton, PageContainer, Heading } from "../styles/Index";
import Modal from '../components/Modal';

type Character = {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
};

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchCharacters = async () => {
    const cachedData = localStorage.getItem(`characters-page-${currentPage}`);
    if (cachedData) {
      setCharacters(JSON.parse(cachedData));
      return;
    }
  
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    setCharacters(response.data.results);
  
    localStorage.setItem(`characters-page-${currentPage}`, JSON.stringify(response.data.results));
  };
  
  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleCharacterClick = (id: number) => {
    setSelectedCharacterId(id);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedCharacterId(null);
    setShowModal(false);
  };

  return (
    <>
      <PageContainer>
        <Heading>Lista de personajes</Heading>
        <Container>
          {characters.map((character: Character) => (
            <Card key={character.id} onClick={() => handleCharacterClick(character.id)}>
              <CardImage src={character.image} alt={character.name} />
              <CardContent>
                <CardTitle>{character.name}</CardTitle>
              </CardContent>
            </Card>
            
          ))}
        </Container>
        <PaginationContainer>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={handleNextPage}
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      </PageContainer>
      <Modal
        title="Detalle del personaje"
        isOpen={showModal}
        onClose={handleModalClose}
      >
        {selectedCharacterId && (
          <div>
            <img src={characters.find((character) => character.id === selectedCharacterId)?.image} alt={characters.find((character) => character.id === selectedCharacterId)?.name} />
            <p>Nombre: {characters.find((character) => character.id === selectedCharacterId)?.name}</p>
            <p>Especie: {characters.find((character) => character.id === selectedCharacterId)?.species}</p>
            <p>Estatus: {characters.find((character) => character.id === selectedCharacterId)?.status}</p>
          </div>
        )}
      </Modal>
    </>
  );
}
