using System; 
using System.Collections.Generic; 
using System.Linq; 
using Microsoft.AspNetCore.Mvc; 
using Microsoft.AspNetCore.SignalR; 
using System.Threading.Tasks; 

using api.Models; 
using api.Hubs; 

namespace api.Controllers
{ 
    [ApiController]
    [Route("[controller]")]
    public class ProcessController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;  
        private readonly IHubContext<MessageHub> _hubContext; 
        public ProcessController(ApplicationDbContext dbContext, 
                                 IHubContext<MessageHub> hubContext) 
        { 
            this._dbContext = dbContext; 
            this._hubContext = hubContext; 
        }

        [HttpPost("Employee")]
        public IActionResult Employees([FromBody]Employee employee)
        {
            _dbContext.Employees.Add(employee); 
            _dbContext.SaveChanges(); 
            return Ok(); 
        }

        [HttpGet("Employee")]
        public List<Employee> Employees() => _dbContext.Employees.ToList(); 
    }
}