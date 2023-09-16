import NavBar from "../components/Navbar/Navbar";
import Card from "../components/Cards/CardsHome/CardHome";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from "react-router-dom";


export default function CursosDisponibles(){
    return <div>
    <NavBar />
    <div className="landing">
   

    <Stack direction="row" spacing={2}>
    <div className="h2">Lista completa de cursos</div>
    <Button startIcon={<FilterListIcon />}>
    <Link to={"/filtro"}>Filtrar</Link>
      </Button>

    </Stack>

    <Card />
    <br/>
    <Card />
    <br/>
    <Card />
    </div>
    </div>
}