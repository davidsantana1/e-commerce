using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreService.Model.Evento
{
    public class Log
    {
        [Key]
        public int Id { get; set; }
        public string IdUser { get; set; } = null!;
        public string? Message { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime RegistredAt { get; set; }
    }
}