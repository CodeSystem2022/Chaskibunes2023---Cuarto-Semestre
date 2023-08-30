package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiante;

public interface EstudiantesRepositorio extends JpaRepository<Estudiante, Integer> {
}
