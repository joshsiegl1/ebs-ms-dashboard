using System; 

namespace api.Models
{ 
    public class Employee
    { 
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public string Email { get; set; } 
        public string Discipline { get; set; } 
        public string State { get; set; } 
        public string Account { get; set; }

    }
}