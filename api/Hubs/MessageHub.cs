using Microsoft.AspNetCore.SignalR; 
using System.Threading.Tasks; 

namespace api.Hubs
{ 
    public class MessageHub : Hub
    { 
        public async Task SendMessage(string message)
        { 
            await Clients.All.SendAsync("RecieveMessage", message); 
        }
    }
}