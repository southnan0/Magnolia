import {
  Component,
  OnInit,
  OnChanges,
  AfterViewChecked,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Location} from '@angular/common';
import '../../../node_modules/kindeditor/themes/default/default.css';
import {EditMessageService, GetMessageService} from '../../services/message.service';
declare var KindEditor:any;
require("imports?this=>window!../../../node_modules/kindeditor/kindeditor-all");

@Component({
  selector: 'my-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [EditMessageService, GetMessageService],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit,OnChanges,AfterViewChecked,OnDestroy {
  private editor:any = null;
  private edit:boolean;
  private sub:any;
  private message:any;

  constructor(private _activatedRoute:ActivatedRoute,
              private _location:Location,
              private _router:Router, private editMessageService:EditMessageService,
              private getMessageService:GetMessageService, private sanitized:DomSanitizer) {
  }

  ngOnInit():void {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      this.edit = params['edit'] === 'true';
      console.info(this.edit)
      if (!this.edit && !this.message) {
        this.getMessageService
          .get()
          .then((message)=> {
            this.message = this.sanitized.bypassSecurityTrustHtml(message);
          })
      }
    });
  }

  ngOnChanges():void {
  }

  ngAfterViewChecked():void {
    this._resetView();
  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

  _resetView() {
    if (this.edit) {
      //todo  这里生命周期会经常进，应该换个地方，但是在路由刚改变的时候，dom还没有附上去，也不行
      this.editor = this.editor || KindEditor.create('#editor_id', {
          minHeight: 300,
          minWidth: 300
        });
    } else if(this.editor){
      this.editor.remove();
      this.editor = null;
    }
  }

  _submit():void {
    console.info('_submit' + this.editor.html().toString());
    this.editMessageService.get(this.editor.html().toString()).then(()=> {
      console.log('发布成功');
      this._location.back();
    })

  }

//todo  navigate  vs location
  _edit():void {
    //this.location.replaceState('/backend', 'edit=true');
    this._router.navigate(['/backend'], {queryParams: {edit: true}})
  }
}
