import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const CardSection = ({image, caption}) => {
    return (
        <>
            <Card
                // actions={[
                //     <a key="1" href="/" alt="">{link}</a>
                // ]}
                header={
                    <CardTitle image={image}></CardTitle>
                }
            >
                {caption}
            </Card>
        </>
    );
};

export default CardSection;
