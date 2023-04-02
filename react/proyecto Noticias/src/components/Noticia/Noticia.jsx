import './Noticia.css';

import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Noticia = ({ data }) => {
  return (
    <>
      <Card sx={{ maxWidth: 1200, minHeight: 1000, mt: 12, mb: 7 }}>
        <CardContent>
          <Typography variant="h4" color="Heading" sx={{ pb: 3 }}>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ pb: 3 }}>
            {data.subtitle}
          </Typography>
          <CardMedia component="img" height="500" image={data.image} alt={data.title} />
          <CardContent sx={{ pr: 0, pl: 0 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxHeight: 100,
                overflow: 'clip',
              }}
            >
              {data.summary}
            </Typography>
          </CardContent>
          <div className="noticiaDatos">
            <div className="author">
              <p>{data.author}</p>
              <p>{data.published_date}</p>
            </div>
            <div className="original">
              <p>{data.clean_url}</p>
              <Button size="small" color="primary">
                <a href={data.link} target="_blank" rel="noreferrer">
                  Noticia original
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Noticia;
