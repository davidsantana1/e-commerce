using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreService.Data;
using CoreService.Repositories.Interface;
using CoreService.DTOs.Event;
using Microsoft.EntityFrameworkCore;

namespace CoreService.Repositories
{
    public class EventLogRepository : IEventLogRepository
    {
        private readonly EventLogDbContext _db;

        public EventLogRepository(EventLogDbContext db)
        {
            _db = db;
        }

        public async Task AddEventLogAsync(string sourceSystem, int userId, string? description, string? action)
        {
            try
            {
                await _db.Database.ExecuteSqlInterpolatedAsync($"EXEC dbo.sp_InsertLog @SourceSystem = {sourceSystem},@UserId = {userId},@Description = {description},@Action = {action}");
            }
            catch (Exception ex)
            {
                string limitedMessage = ex.Message.Length > 500 ? ex.Message.Substring(0, 500) : ex.Message;
                string typeAction = "Error";

                await _db.Database.ExecuteSqlInterpolatedAsync($"EXEC dbo.sp_InsertLog @SourceSystem = {sourceSystem},@UserId = {userId},@Description = {limitedMessage},@Action = {typeAction}");
            }
        }
    }
}