import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 10;
  serverStatus = 'open';
  statusOfTheServer = 'Server is not running';
  typedServerName = '';

  getServerStatus(){
    return 'closed';
  }

  serverRunning = false;

  constructor() {
    setTimeout(() => {
      this.serverRunning = true;
    }, 2000);
   }

  ngOnInit(): void {
    

  }
  checkServerStatus(){
    this.statusOfTheServer='Server has started to run';
  };

  onUpdateServerName(event){
    // console.log(event);
    this.typedServerName = event.target.value;
  }
}
