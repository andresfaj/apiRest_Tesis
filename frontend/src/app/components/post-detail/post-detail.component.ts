import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RstateService } from '../../services/rstate/rstate.service';
import { RealState } from 'src/app/models/rstate';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/1500/500?random&t=${Math.random()}`);
  restate: any;
  imageUrl="localhost:8000";

  constructor(
    private route: ActivatedRoute,
    private rstateService: RstateService
  ) { }

  ngOnInit() {
    this.getidPost();

  }

  getidPost(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.rstateService.getRstate(id).subscribe(
      post => {
        this.restate = new RealState();        
        this.restate = post;
        console.log(this.restate);
      }
    )
  }

}
