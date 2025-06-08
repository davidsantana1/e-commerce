using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreService.Data;
using Microsoft.EntityFrameworkCore;

namespace CoreService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TerranovaController : ControllerBase
    {
        private readonly TerranovaDbContext _db;
        private readonly EventLogDbContext _eventLogDb;
        public TerranovaController(TerranovaDbContext db, EventLogDbContext eventLogDb)
        {
            _db = db;
            _eventLogDb = eventLogDb;
        }

        [HttpGet("connection")]
        public async Task<IActionResult> GetConnection()
        {
            try
            {
                await _eventLogDb.Database.OpenConnectionAsync();
                _eventLogDb.Database.CloseConnection();

                return Ok("Database connection is successful.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to connect to the database: {ex.Message}");
            }
        }
    }
}