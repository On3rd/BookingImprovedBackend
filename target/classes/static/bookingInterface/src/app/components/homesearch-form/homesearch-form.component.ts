import { Component, OnInit ,ViewChild} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {PropertyService} from '../../services/property.service';
import {Router} from '@angular/router';
import {Property} from '../../classes/property';
import {PropertyMapService} from '../../services/property-map.service';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {SearchService} from '../../services/search-service.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject} from 'rxjs';
import {merge} from 'rxjs/observable/merge';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  
@Component({
  selector: 'app-homesearch-form',
  templateUrl: './homesearch-form.component.html',
  styleUrls: ['./homesearch-form.component.css']
})


export class HomesearchFormComponent implements OnInit {

  private property:Property[];
  //private title:string;
  private adult = 0;
  private child = 0;
  private visitors = 0;
  private rooms = 0;
  private searchForm:FormGroup;
  results: Object;
  Entries:Object;
  searchTerm$ = new Subject<string>();

  constructor(private _searchService:SearchService,public toastr:ToastrService,private _formBuilder:FormBuilder,private _propertyMapService:PropertyMapService,private _login:LoginService,private _PropertyService:PropertyService, private _router:Router) {

    this._searchService.search(this.searchTerm$)
    .subscribe(results => {
      this.results = results;
    });

   }

  ngOnInit() {
    this._PropertyService.getProperties().subscribe((property)=>{console.log("Search Through +++",property);
      this.property = property;
    
    },(error)=>{
      console.log(error);
     
    });

    this.searchForm = this._formBuilder.group({
      "txt_destination":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "Adults" : new FormControl('',[Validators.maxLength(100),Validators.required]),
      "Children" :new FormControl('',[Validators.maxLength(10),Validators.required]),
      "Rooms" :new FormControl('',[Validators.maxLength(10),Validators.required])
      
    });

  }
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  Search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.property
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
 
search(title:string,adults:string,children:string,rooms:string)
{
  if(adults != undefined)
  {
    this.adult = parseInt(adults);
  };
    if(children !=undefined)
    {
      this.child = parseInt(children);
    };
    
   this.visitors = this.adult + this.child;
    this.rooms = parseInt(rooms);

    this._PropertyService.searchProperty(title,this.rooms,this.visitors).subscribe(search =>{

      console.log("Search Results",search);


    })

}

possibleEntries(title)
{ 
   this._PropertyService.possibleEntries(title).subscribe(data =>
  {
    this.Entries = data;
  });
}
  searchProperty(destination:string,adults:string,children:string,rooms:string)
  {


    var dest;
    var vist;
    var Rooms = 0;
    var count = 0;
    var countr = 0;
    var Rcount = 0;
    var Rcountr = 0;
    var Fcounter = 0;
    if(adults != undefined)
    {
      this.adult = parseInt(adults);
    };
      if(children !=undefined)
      {
        this.child = parseInt(children);
      };
      
    var vistors= this.adult + this.child
   // console.log("Number or vistors Checked", vistors);
    this.property.forEach( value => {

       if(value.city == destination)
      {
        dest = destination;
        count = 1;
        Rcount = 1;
        console.log(destination);
        
      };
      
      if(value.prop_name == destination)
         {
          dest = destination;
            count = 1;
            Rcount = 1;
            console.log(dest);
           
          };

          if(value.province == destination)
          {
            dest = destination;
              count = 1;
              Rcount = 1;
              console.log(destination);
             
          };
          if(value.country == destination)
          {
            dest = destination;
              count = 1;
              Rcount = 1;
              console.log(dest);
              
          };
          if(value.prop_type == destination)
          {
            dest = destination;
              count = 1;
              Rcount = 1;
              console.log(dest);
             
          };

          if ( vistors <= value.numberRoom )
          {
            if(Rooms == 0 || Rooms >= vistors)
            {
              Rooms = value.numberRoom;
              countr = 1;
              Rcountr= 1;
              console.log("Visitors",vistors);
            };
            
          };
          
          if(parseInt(rooms) <= value.numberRoom )
          {
            if(Rooms == 0 || Rooms >= parseInt(rooms))
            {
            Rooms = value.numberRoom;
            countr = 1;
            Rcountr = 1;
            console.log("Visitors",vistors);
            }
          
            
          };
          
          if(Rcount == 1 && Rcountr == 1)
          {
            Rcount = 0;
            Rcountr = 0;
            Fcounter++;
            this._propertyMapService.setResults(Fcounter);
           
          }
    });
    if(count == 1 && countr == 1)
    {
    this._propertyMapService.setTitle(dest);
    this._propertyMapService.setRooms(Rooms);
    
    this._router.navigate(['searchProperty']);
    countr = 0;
    count = 0;
    }
    else
    {
      //alert("No results.");
      
      this._router.navigate(['home']);
      this.toastr.info("No results.","Search");
    
      count = 0;
    }
  }

}
