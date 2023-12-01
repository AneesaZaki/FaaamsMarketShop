// import React, { useEffect, useState } from 'react'
// // import PropTypes from 'prop-types'
// import {makeStyles} from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'
// import GridListTileBar from '@material-ui/core/GridListTileBar'
// import {Link} from 'react-router-dom'
// import AddToCart from './../cart/AddToCart'
// import axios from 'axios'







// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     background: theme.palette.background.paper,
//     textAlign: 'left',
//     padding: '0 8px'
//   },
//   container: {
//     minWidth: '100%',
//     paddingBottom: '14px'
//   },
//   gridList: {
//     width: '100%',
//     minHeight: 200,
//     padding: '16px 0 10px'
//   },
//   title: {
//     padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
//     color: theme.palette.openTitle,
//     width: '100%'
//   },
//   tile: {
//     textAlign: 'center'
//   },
//   image: {
//     height: '100%'
//   },
//   tileBar: {
//     backgroundColor: 'rgba(0, 0, 0, 0.72)',
//     textAlign: 'left'
//   },
//   tileTitle: {
//     fontSize:'1.1em',
//     marginBottom:'5px',
//     color:'rgb(189, 222, 219)',
//     display:'block'
//   }
// }))

// export default function Products(){
//   const classes = useStyles();
//   const [products, setProducts]=useState([])
//   useEffect(()=>{
//     axios('/api/products').then(response=>{
//       if (response.status===200){
//         const fetchedData=response.data;
//         setProducts(fetchedData)
//         console.log(fetchedData)
//       }
//    }).catch(err=>{

//    }) 
//   },[])
//     return (
//     // <div>
//     //   <p>products</p>
//         // <div >
//           <GridList cellHeight={200} >
         
//           {products.map((product, i) => (
           

         
            
//             <GridListTile key={i} className={classes.tile}>
               
//          <Link to={"/product/"+product._id}><p>Link</p></Link>
   

         
        
//               <GridListTileBar className={classes.tileBar}
//                 title={<Link to={"/product/"+product._id} className={classes.tileTitle}>{product.name}</Link>}
//                 subtitle={<span>$ {product.price}</span>}
//                 actionIcon={
//                   <AddToCart item={product}/>
                  
//                 }
//               />
//             </GridListTile>
//           ))}
//         </GridList>
    
//       //   </div>
//       // </div>
//        )

// } --------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import List from '@material-ui/core/List';
// import CardMedia from '@material-ui/core/CardMedia';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import { Link } from 'react-router-dom';
// import AddToCart from './../cart/AddToCart';
// import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   products: {
//     padding: '24px',
//   },
//   addButton: {
//     float: 'right',
//   },
//   leftIcon: {
//     marginRight: '8px',
//   },
//   title: {
//     margin: theme.spacing(2),
//     color: theme.palette.protectedTitle,
//     fontSize: '1.2em',
//   },
//   subheading: {
//     marginTop: theme.spacing(2),
//     color: theme.palette.openTitle,
//   },
//   cover: {
//     width: 110,
//     height: 100,
//     margin: '8px',
//   },
//   details: {
//     padding: '10px',
//   },
//   tileBar: {
//     background: 'rgba(0, 0, 0, 0.7)',
//     textAlign: 'left',
//   },
//   tileTitle: {
//     fontSize: '1.1em',
//     marginBottom: '5px',
//     color: theme.palette.primary.contrastText,
//     textDecoration: 'none',
//   },
//   tileSubtitle: {
//     fontSize: '1em',
//     color: theme.palette.primary.contrastText,
//   },
// }));

// export default function Products() {
//   const classes = useStyles();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios('/api/products')
//       .then((response) => {
//         if (response.status === 200) {
//           const fetchedData = response.data;
//           setProducts(fetchedData);
//           console.log(fetchedData);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <GridList cellHeight={180} className={classes.products}>
//       {products.map((product, i) => (
//         <GridListTile key={i}>
//           <img src={`/api/product/image/${product._id}?`} alt={product.name} />
//           <GridListTileBar
//             title={
//               <Link to={`/product/${product._id}`} className={classes.tileTitle}>
//                 {product.name}
//               </Link>
//             }
//             subtitle={<span className={classes.tileSubtitle}>$ {product.price}</span>}
//             actionIcon={<AddToCart item={product} />}
//             className={classes.tileBar}
//           />
//         </GridListTile>
//       ))}
//     </GridList>
//   );
// }

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from 'react-router-dom';
import AddToCart from './../cart/AddToCart';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  products: {
    padding: '24px',
  },
  addButton: {
    float: 'right',
  },
  leftIcon: {
    marginRight: '8px',
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: '1.2em',
  },
  subheading: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  cover: {
    width: 110,
    height: 100,
    margin: '20px',
  },
  details: {
    padding: '10px',
  },
  tileBar: {
    background: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
  },
  tileTitle: {
    fontSize: '1.1em',
    marginBottom: '5px',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  tileSubtitle: {
    fontSize: '1em',
    color: theme.palette.primary.contrastText,
  },
}));

export default function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('/api/products')
      .then((response) => {
        if (response.status === 200) {
          const fetchedData = response.data;
          setProducts(fetchedData);
          console.log(fetchedData);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <GridList cellHeight={250} cols={3} spacing={50} className={classes.products}>
      {products.map((product, i) => (
        <GridListTile key={i}>
          <img src={`/api/product/image/${product._id}?`} alt={product.name} />
          <GridListTileBar
            title={
              <Link to={`/product/${product._id}`} className={classes.tileTitle}>
                {product.name}
              </Link>
            }
            subtitle={<span className={classes.tileSubtitle}>$ {product.price}</span>}
            actionIcon={<AddToCart item={product} />}
            className={classes.tileBar}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}