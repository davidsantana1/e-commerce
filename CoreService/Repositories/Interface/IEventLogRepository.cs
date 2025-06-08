using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreService.DTOs.Event;

namespace CoreService.Repositories.Interface
{
    public interface IEventLogRepository
    {
        Task AddEventLogAsync(string sourceSystem, int userId, string? description, string? action); // Method to add an event log entry
    }
}