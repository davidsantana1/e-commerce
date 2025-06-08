using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreService.DTOs.Event
{
    public class LogDto
    {
        public string SourceSystem { get; set; } = null!;
        public int UserId { get; set; }
        public string? Description { get; set; }
        public string? Action { get; set; }
    }
}