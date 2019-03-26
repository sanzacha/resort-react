import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://s27771.pcdn.co/wp-content/uploads/2018/10/what-to-wear-snorkeling-in-hawaii-kids-snorkeling-clothes-kids-snorkel-gear-.jpeg',
      title: 'Snorkeling',
      width: '40%'
    },
    {
      url:
        'http://dreamcatchermunnar.com/wp-content/uploads/2015/10/ayurveda-massage.jpg',
      title: 'Massage',
      width: '20%'
    },
    {
      url:
        'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jn7co4sjyqxeavwykaoc/LakshmiHillsTrekkingfromMunnar.jpg',
      title: 'Hiking',
      width: '40%'
    },
    {
      url:
        'https://irisholidays.com/backend/web/tours/munnar-tea-garden-bus-1518332803.jpg',
      title: 'Tour',
      width: '38%'
    },
    {
      url:
        'https://in.lastminute.com/blog/wp-content/uploads/2018/07/Puttu-food-595x331.png',
      title: 'Gastronomy',
      width: '38%'
    },
    {
      url:
        'https://ihpl.b-cdn.net/pictures/travelguide/things/gallery/337_3100.jpg',
      title: 'Shopping',
      width: '24%'
    },
    {
      url:
        'http://www.walkaboutgourmet.com/Gallery/Flavours%20of%20South%20India/slides/Walking%20in%20the%20tea%20plantation%20in%20Munnar%20Kerala%20India.jpg',
      title: 'Walking',
      width: '40%'
    },
    {
      url:
        'http://www.silvertipsmunnar.com/wp-content/themes/munnar/img/aminity-1.jpg',
      title: 'Fitness',
      width: '20%'
    },
    {
      url:
        'https://previews.agefotostock.com/previewimage/medibigoff/08b8a4dedf1f91e0b671dd039a4cdf92/cul-is09aw1dc.jpg',
      title: 'Reading',
      width: '40%'
    }
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
