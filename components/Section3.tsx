import { Button } from "@mui/material"
import Link from "next/link"




const Section3 = () => {

 



  return (
    <section>
      <div className="centrar" id="s3">
        <h1> ! Ten Cuidado No Todos Los Pokemons Son Buenos ¡ </h1>

        <p> algunos tienen planes macabros contra los seres humanos xD </p>
        
        <Link href={"/pokemons"} passHref>
          <div id="jose">
       <Button variant="contained" color="warning"  >
         Alla Vamos
       </Button>
       </div>
        </Link>
      </div>
    </section>
  )
}

export default Section3
