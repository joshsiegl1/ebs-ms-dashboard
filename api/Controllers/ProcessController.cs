using System; 
using System.Collections.Generic; 
using System.Linq; 
using Microsoft.AspNetCore.Mvc; 

using System.Threading.Tasks; 

using api.Models; 

namespace api.Controllers
{ 
    [ApiController]
    [Route("[controller]")]
    public class ProcessController : ControllerBase
    {
        private readonly ApplicationDbContext _context;  
        public ProcessController(ApplicationDbContext context) 
        { 
            this._context = context; 
        }

        [HttpPost("Employee")]
        public IActionResult Employees([FromBody]Employee employee)
        {
            _context.Employees.Add(employee); 
            _context.SaveChanges(); 
            return Ok(); 
        }

        [HttpGet("Employee")]
        public List<Employee> Employees() => _context.Employees.ToList(); 
    }
}