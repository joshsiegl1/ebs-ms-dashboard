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
        public IActionResult AddToList([FromBody]Employee employee)
        {
            return Ok(); 
        }

        [HttpGet("Employee")]
        public List<Employee> GetEmployees()
        { 
            List<Employee> employees = new List<Employee>(); 

            return employees; 
        }
    }
}