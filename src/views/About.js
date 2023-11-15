import React from 'react';
import {HeaderContainer} from "../styles/HeaderContainer";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    margin-bottom: 10px;
`;

const UnorderedList = styled.ul`
    list-style-type: square;
    margin-left: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

export const About = () => {
    return (
        <HeaderContainer>
            <div>
                <Title>Welcome to our React JS learning application!</Title>

                <Paragraph>The idea is to learn and master the powerful React JS framework. This application is designed to provide you with a practical and engaging experience in React development.</Paragraph>

                <Paragraph>Main features of the application:</Paragraph>
                <UnorderedList>
                    <ListItem>Access to a wide variety of educational resources, tutorials, and practical examples.</ListItem>
                    <ListItem>Integration with APIs to demonstrate how to consume external data in React applications.</ListItem>
                    <ListItem>Real-time development experience with automatic reloading (hot-reloading).</ListItem>
                    <ListItem>Intuitive and user-friendly interface.</ListItem>
                </UnorderedList>

                <Paragraph>Our team is committed to providing quality content and support to help you become a confident and skilled React developer. Whether you are a beginner or an experienced developer, we have resources to meet your needs.</Paragraph>

                <Paragraph>Start your learning journey now and explore all the exciting possibilities that React JS offers!</Paragraph>
            </div>
        </HeaderContainer>
    );
}

