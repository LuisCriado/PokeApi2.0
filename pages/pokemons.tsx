
import { NextPage } from "next"
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from "../themes";
import CssBaseline from '@mui/material/CssBaseline';
import Layout from "../components/layouts/Layout";
import { GetStaticProps } from 'next'
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Grid } from "@mui/material";
import { PokemonCard } from "../components/pokemon";




interface Props{
  pokemons : SmallPokemon[];

}





const Pokemos: NextPage<Props> = ({pokemons}) => {
 
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Layout title="Listado de pokemons" >

        

        <Grid container gap={2} >

          
         
            
          
          {



            pokemons.map( ({id, name , img,})=>(
             <PokemonCard key={id} id={id} name={name} img={img} />
            ))
          }
          
        </Grid>
        
   
      </Layout>
    </ThemeProvider>
  )
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.



export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=450')
  



  //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
  const pokemons :SmallPokemon[] = data.results.map((poke,i) => ({

   

    ...poke,
    id: i + 1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`

  }) )

  return {
    props: {
      pokemons
      
      
    }
  }
}

export default Pokemos
