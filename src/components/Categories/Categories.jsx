import React from 'react';
import { Grid, Section, Titulo, Card, Image, Inner } from './Categories.styled';
import { categories } from '../../utils/consts';

const Categories = () => {
    return (
        <Section>
            <h2>Explorá por categorías</h2>
            <Grid>
                {categories.map((category, id) => (
                    <Card key={id} onSelectedCategory={category.value}>
                        <Inner>
                            <Image src={category.image} alt={category.name} />
                            <Titulo>{category.icon} {category.name}</Titulo>
                        </Inner>
                    </Card>
                ))}
            </Grid>
        </Section>
    );
};

export default Categories;
