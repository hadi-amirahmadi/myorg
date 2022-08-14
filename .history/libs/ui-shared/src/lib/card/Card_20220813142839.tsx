import { Card as CustomCard, CardMedia, CardContent, CardActions } from '@mui/material';

import './Card.css';

/* eslint-disable-next-line */
export interface CardProps {
  content: React.ReactNode;
  actions?: React.ReactNode;
  alt?: string;
  image?: string; 
}

export function Card(props: CardProps) {
  const { content, actions, alt, image } = props;
  return (
    <CustomCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height={imageHeight}
        image={image}
        alt={alt}
      />
      <CardContent>
        
      </CardContent>
      <CardActions>
        
      </CardActions>
    </CustomCard>
  );
}

export default Card;
