import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: #3f51b5;
    padding: 24px;
`;

export const Heading = styled.h1`
    font-size: 48px;
    margin-bottom: 24px;
    text-align: center;
    color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
    width: 250px;
    height: 350px;
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    cursor: pointer;

    &:hover {
        background-color: #f2f2f2;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
`;

export const Button = styled.button`
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: #f0ad4e;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #d58512;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ddd' : '#f2f2f2')};
  border: none;
  color: ${({ disabled }) => (disabled ? '#666' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ddd' : '#e6e6e6')};
  }
`;
