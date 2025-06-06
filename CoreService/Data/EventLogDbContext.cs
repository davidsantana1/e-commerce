using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreService.Model.Evento;
using Microsoft.EntityFrameworkCore;

namespace CoreService.Data
{
    public class EventLogDbContext : DbContext
    {
        public EventLogDbContext(DbContextOptions<EventLogDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Log> Logs { get; set; }
    }
}