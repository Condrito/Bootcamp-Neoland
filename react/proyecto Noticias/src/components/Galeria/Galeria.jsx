import './Galeria.css';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Galeria = ({ datos, ambito }) => {
  return (
    <>
      <ul className="galeria">
        {datos.map((noticia) =>
          ambito === noticia.topic ? (
            <li key={noticia.id}>
              <Card sx={{ maxWidth: 500, height: 750, p: 3 }}>
                <Typography variant="h4" color="Heading" sx={{ pb: 3 }}>
                  {noticia.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ pb: 3 }}>
                  {noticia.subtitle}
                </Typography>

                <CardMedia
                  sx={{ height: 140 }}
                  title={noticia.title}
                  image={noticia.image}
                  alt={noticia.title}
                />
                <CardContent sx={{ pr: 0, pl: 0 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      maxHeight: 100,
                      overflow: 'clip',
                    }}
                  >
                    {noticia.summary}
                  </Typography>
                  ...
                </CardContent>
                <CardActions>
                  <Link to={`/${noticia.topic}/${noticia.id}`}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
                <p>{noticia.published_date}</p>
              </Card>
            </li>
          ) : ambito === 'Noticias' ? (
            <li key={noticia.id}>
              <Card sx={{ maxWidth: 500, height: 750, p: 3 }}>
                <Typography variant="h4" color="Heading" sx={{ pb: 3 }}>
                  {noticia.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ pb: 3 }}>
                  {noticia.subtitle}
                </Typography>

                <CardMedia
                  sx={{ height: 140 }}
                  title={noticia.title}
                  image={noticia.image}
                  alt={noticia.title}
                />
                <CardContent sx={{ pr: 0, pl: 0 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      maxHeight: 100,
                      overflow: 'clip',
                    }}
                  >
                    {noticia.summary}
                  </Typography>
                  ...
                </CardContent>
                <CardActions>
                  <Link to={`/Noticias/${noticia.id}`}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
                <p>{noticia.published_date}</p>
              </Card>
            </li>
          ) : (
            ''
          ),
        )}
      </ul>
      ;
    </>
  );
};

export default Galeria;
