import { Card as CustomCard, CardMedia, CardContent, CardActions } from '@mui/material';

import './Card.css';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
    <CustomCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        
      </CardContent>
      <CardActions>
        
      </CardActions>
    </CustomCard>
  );
}

export default Card;
