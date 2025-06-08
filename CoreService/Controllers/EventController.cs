using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreService.Data;
using CoreService.DTOs.Event;
using CoreService.Repositories.Interface;

namespace CoreService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : ControllerBase
    {
        private readonly IEventLogRepository _eventLogRepository;
        public EventController(IEventLogRepository eventLogRepository)
        {
            _eventLogRepository = eventLogRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AddEventLog([FromBody] LogDto logDto)
        {
            try
            {
                await _eventLogRepository.AddEventLogAsync(logDto.SourceSystem, logDto.UserId, logDto.Description, logDto.Action);

                return Ok("Event logged");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to add event log: {ex.Message}");
            }
        }
    }
}