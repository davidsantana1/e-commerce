using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreService.Models.Evento
{
    public class Log
    {
        [Key]
        public int Id { get; set; }
        public string SourceSystem { get; set; } = null!;
        public int UserId { get; set; }
        public string? Description { get; set; }
        public string? Action { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}