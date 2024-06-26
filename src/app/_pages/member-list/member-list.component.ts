import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  showForm = false;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
  createMember(member: Member) {
    this.memberService.createMember(member).subscribe({
      next: (newMember) => {
        this.members.push(newMember);
        this.toggleForm();
      }
    });
  }
  
}
