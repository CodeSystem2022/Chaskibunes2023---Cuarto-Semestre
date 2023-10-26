package ar.com.utnfrsr.todoapp.model.dto.response;

import lombok.Data;

import java.time.LocalTime;
import java.util.Date;

@Data
public class TaskResponseDTO {

    //atributos
    private Long id;
    private String title;
    private Date date;
    private LocalTime time;
    private boolean finished;
}
