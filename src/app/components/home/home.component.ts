import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ToDo } from '../../ToDoItems';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items:ToDo[] = [
    {
      "ID": 1,
      "Title": "Complete Project",
      "Description": "Finish the coding project by the deadline.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 2,
      "Title": "Buy Groceries",
      "Description": "Purchase items for the week.",
      "CategoryID": 1,
      "Category": {
        "ID": 1,
        "Name": "Personal"
      }
    },
    {
      "ID": 3,
      "Title": "Read Book",
      "Description": "Read the latest novel.",
      "CategoryID": 2,
      "Category": {
        "ID": 2,
        "Name": "Leisure"
      }
    },
    {
      "ID": 4,
      "Title": "Plan Vacation",
      "Description": "Research and plan a vacation destination.",
      "CategoryID": 2,
      "Category": {
        "ID": 2,
        "Name": "Leisure"
      }
    },
    {
      "ID": 5,
      "Title": "Exercise",
      "Description": "Go for a jog or hit the gym.",
      "CategoryID": 1,
      "Category": {
        "ID": 1,
        "Name": "Personal"
      }
    },
    {
      "ID": 6,
      "Title": "Write Blog Post",
      "Description": "Create a new blog post on a relevant topic.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 7,
      "Title": "Attend Meeting",
      "Description": "Participate in the weekly team meeting.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 8,
      "Title": "Cook Dinner",
      "Description": "Prepare a delicious dinner for the family.",
      "CategoryID": 1,
      "Category": {
        "ID": 1,
        "Name": "Personal"
      }
    },
    {
      "ID": 9,
      "Title": "Learn New Skill",
      "Description": "Start learning a new programming language.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 10,
      "Title": "Watch Movie",
      "Description": "Catch up on the latest blockbuster.",
      "CategoryID": 2,
      "Category": {
        "ID": 2,
        "Name": "Leisure"
      }
    },
    {
      "ID": 11,
      "Title": "Organize Workspace",
      "Description": "Declutter and organize the home office.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 12,
      "Title": "Attend Webinar",
      "Description": "Participate in a webinar on emerging technologies.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 13,
      "Title": "Practice Instrument",
      "Description": "Spend time practicing the guitar.",
      "CategoryID": 2,
      "Category": {
        "ID": 2,
        "Name": "Leisure"
      }
    },
    {
      "ID": 14,
      "Title": "Update Resume",
      "Description": "Revise and update the professional resume.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 15,
      "Title": "Explore Local Park",
      "Description": "Take a leisurely walk in the nearby park.",
      "CategoryID": 2,
      "Category": {
        "ID": 2,
        "Name": "Leisure"
      }
    },
    {
      "ID": 16,
      "Title": "Complete Online Course",
      "Description": "Finish the online course on data science.",
      "CategoryID": 3,
      "Category": {
        "ID": 3,
        "Name": "Work"
      }
    },
    {
      "ID": 17,
      "Title": "Volunteer for Charity",
      "Description": "Contribute time to a local charity or community service.",
      "CategoryID": 1,
      "Category": {
        "ID": 1,
        "Name": "Personal"
      }
    },
    {
      "ID": 18,
      "Title": "Visit Art Gallery",
      "Description": "Explore the latest art exhibitions in the city.",
      "CategoryID": 2,
      "Category": {
        "ID": 2,
        "Name": "Leisure"
      }
    },
    {
      "ID": 19,
      "Title": "Review Budget",
      "Description": "Assess and review monthly budget and expenses.",
      "CategoryID": 1,
      "Category": {
        "ID": 1,
        "Name": "Personal"
      }
    },
    {
      "ID": 20,
      "Title": "Practice Meditation",
      "Description": "Engage in daily meditation for mindfulness.",
      "CategoryID": 1,
      "Category": {
        "ID": 1,
        "Name": "Personal"
      }
    }
  ]
  displayedColumns = ["ID","Title","Description","Category Name",]
}
