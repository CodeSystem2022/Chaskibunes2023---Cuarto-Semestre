package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.repositorio.EstudiantesRepositorio;

import java.util.List;

@Service
public class EstudianteServicio implements IEstudianteServicio {
    
    @Autowired
    private EstudiantesRepositorio estudiantesRepositorio; 

    @Override
    public List<Estudiantes2022> listarEstudiantes() { 
        List<Estudiantes2022> estudiante = estudiantesRepositorio.findAll(); 
        return estudiante; 
    }

    @Override
    public Estudiantes2022 buscarEstudiantePorId(Integer idEstudiante) { 
        Estudiantes2022 estudiante = estudiantesRepositorio.findById(idEstudiante).orElse(null);
        return estudiante; 
    }

    @Override
    public void guardarEstudiante(Estudiantes2022 estudiante) { 
        estudiantesRepositorio.save(estudiante); 
    }

    @Override
    public void eliminarEstudiante(Estudiantes2022 estudiante) { 
        estudiantesRepositorio.delete(estudiante); 
    } 
}
