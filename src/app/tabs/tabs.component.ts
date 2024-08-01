import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  activeTab: string = 'java';
  javaContent: SafeHtml;
  angularContent: SafeHtml;
  sqlContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { 
    this.javaContent = this.sanitizer.bypassSecurityTrustHtml(`
      <h2>Java (programming language)</h2>
  <p>Java programming language was originally developed by Sun Microsystems which was
  initiated by James Gosling and released in 1995 as core component of Sun Microsystems'
  Java platform (Java 1.0 [J2SE]).<br>
  The latest release of the Java Standard Edition is Java SE 8. With the advancement of Java
  and its widespread popularity, <br>multiple configurations were built to suit various types of
  platforms. For example: J2EE for Enterprise Applications, J2ME for Mobile Applications.
  The new J2 versions were renamed as Java SE, Java EE, and Java ME respectively.< br>Java
  is guaranteed to be Write Once, Run Anywhere.
  Java is:<br>
   Object Oriented: In Java, everything is an Object. Java can be easily extended
  since it is based on the Object model.
   Platform Independent: Unlike many other programming languages including C
  and C++, when Java is compiled, it is not compiled into platform specific machine,
  rather into platform independent byte code. This byte code is distributed over the
  web and interpreted by the Virtual Machine (JVM) on whichever platform it is being
  run on.
  Java programming language was originally developed by Sun Microsystems which was
  initiated by James Gosling and released in 1995 as core component of Sun Microsystems'
  Java platform (Java 1.0 [J2SE]).<br>
  The latest release of the Java Standard Edition is Java SE 8. With the advancement of Java
  and its widespread popularity, <br>multiple configurations were built to suit various types of
  platforms. For example: J2EE for Enterprise Applications, J2ME for Mobile Applications.
  The new J2 versions were renamed as Java SE, Java EE, and Java ME respectively.< br>Java
  is guaranteed to be Write Once, Run Anywhere.
  Java is:<br>
   Object Oriented: In Java, everything is an Object. Java can be easily extended
  since it is based on the Object model.
   Platform Independent: Unlike many other programming languages including C
  and C++, when Java is compiled, it is not compiled into platform specific machine,
  rather into platform independent byte code. This byte code is distributed over the
  web and interpreted by the Virtual Machine (JVM) on whichever platform it is being
  run on.
  Java programming language was originally developed by Sun Microsystems which was
  initiated by James Gosling and released in 1995 as core component of Sun Microsystems'
  Java platform (Java 1.0 [J2SE]).<br>
  The latest release of the Java Standard Edition is Java SE 8. With the advancement of Java
  and its widespread popularity, <br>multiple configurations were built to suit various types of
  platforms. For example: J2EE for Enterprise Applications, J2ME for Mobile Applications.
  The new J2 versions were renamed as Java SE, Java EE, and Java ME respectively.< br>Java
  is guaranteed to be Write Once, Run Anywhere.
  Java is:<br>
   Object Oriented: In Java, everything is an Object. Java can be easily extended
  since it is based on the Object model.
   Platform Independent: Unlike many other programming languages including C
  and C++, when Java is compiled, it is not compiled into platform specific machine,
  rather into platform independent byte code. This byte code is distributed over the
  web and interpreted by the Virtual Machine (JVM) on whichever platform it is being
  run on.<br>
  <br>
  Java programming language was originally developed by Sun Microsystems which was
  initiated by James Gosling and released in 1995 as core component of Sun Microsystems'
  Java platform (Java 1.0 [J2SE]).<br>
  The latest release of the Java Standard Edition is Java SE 8. With the advancement of Java
  and its widespread popularity, <br>multiple configurations were built to suit various types of
  platforms. For example: J2EE for Enterprise Applications, J2ME for Mobile Applications.
  The new J2 versions were renamed as Java SE, Java EE, and Java ME respectively.< br>Java
  is guaranteed to be Write Once, Run Anywhere.
 
  </p>
    `);
    this.angularContent = this.sanitizer.bypassSecurityTrustHtml(`
      <h2>Angular</h2>
  <p>Angular (commonly referred to as "Angular 2+" or "Angular 2") is a <br>
  TypeScript-based opensource front-end web framework led by the Angular Team at Google and by a community of
  individuals and corporations to address all of the parts of the developer's workflow while building
  complex web applications. Angular is a complete rewrite from the same team that built AngularJS.<br>
  ¹
  The framework consists of several libraries, some of them core (@angular/core for example) and
  some optional (@angular/animations).<br>
  You write Angular applications by composing HTML templates with Angularized markup, writing
  component classes to manage those templates, adding application logic in services, and boxing
  components and services in modules.<br>
  Then you launch the app by bootstrapping the root module.<br> Angular takes over, presenting your
  application content in a browser and responding to user interactions according to the instructions
  you've provided.<br>
  Arguably, the most fundamental part of developing Angular applications are the components.<br> A
  component is the combination of an HTML template and a component class that controls a portion
  of the screen. <br>Here is an example of a component that displays a simple string:
  src/app/app.component.ts
  Angular (commonly referred to as "Angular 2+" or "Angular 2") is a <br>
  TypeScript-based opensource front-end web framework led by the Angular Team at Google and by a community of
  individuals and corporations to address all of the parts of the developer's workflow while building
  complex web applications. Angular is a complete rewrite from the same team that built AngularJS.<br>
  ¹
  The framework consists of several libraries, some of them core (@angular/core for example) and
  some optional (@angular/animations).<br>
  You write Angular applications by composing HTML templates with Angularized markup, writing
  component classes to manage those templates, adding application logic in services, and boxing
  components and services in modules.<br>
  Then you launch the app by bootstrapping the root module.<br> Angular takes over, presenting your
  application content in a browser and responding to user interactions according to the instructions
  you've provided.<br>
  Arguably, the most fundamental part of developing Angular applications are the components.<br> A
  component is the combination of an HTML template and a component class that controls a portion
  of the screen. <br>Here is an example of a component that displays a simple string:
  src/app/app.component.ts
  </p>
    
    `);
    this.sqlContent = this.sanitizer.bypassSecurityTrustHtml(`
      <h2>SQL</h2>
  <p>• SQL stands for Structured Query Language.<br> It is
  used for storing and managing data in Relational
  Database Management System (RDBMS).<br>
  • It is a standard language for Relational DatabaseSystem.<br> It enables a user to create, read, updateand delete relational databases and tables.
  <br>• All the RDBMS like MySQL, Informix, Oracle,<br> MSAccess and SQL Server use SQL as their standarddatabase language.
  <br>• SQL allows users to query the database in a
  number of ways, using English-like statements.<br>
  • Structure query language is not case sensitive. Generally,
keywords of SQL are written in uppercase.<br>
• Statements of SQL are dependent on text lines. We can
use a single SQL statement on one or multiple text line.<br>
• Using the SQL statements, you can perform most of the
actions in a database.<br>
• SQL depends on tuple relational calculus and relational
algebra.
• SQL stands for Structured Query Language.<br> It is
  used for storing and managing data in Relational
  Database Management System (RDBMS).<br>
  • It is a standard language for Relational DatabaseSystem.<br> It enables a user to create, read, updateand delete relational databases and tables.
  <br>• All the RDBMS like MySQL, Informix, Oracle,<br> MSAccess and SQL Server use SQL as their standarddatabase language.
  <br>• SQL allows users to query the database in a
  number of ways, using English-like statements.<br>
  • Structure query language is not case sensitive. Generally,
keywords of SQL are written in uppercase.<br>
• Statements of SQL are dependent on text lines. We can
use a single SQL statement on one or multiple text line.<br>
• Using the SQL statements, you can perform most of the
actions in a database.<br>
• SQL depends on tuple relational calculus and relational
algebra.
• SQL stands for Structured Query Language.<br> It is
  used for storing and managing data in Relational
  Database Management System (RDBMS).<br>
  • It is a standard language for Relational DatabaseSystem.<br> It enables a user to create, read, updateand delete relational databases and tables.
  <br>• All the RDBMS like MySQL, Informix, Oracle,<br> MSAccess and SQL Server use SQL as their standarddatabase language.
  <br>• SQL allows users to query the database in a
  number of ways, using English-like statements.<br>
  • Structure query language is not case sensitive. Generally,
keywords of SQL are written in uppercase.<br>
• Statements of SQL are dependent on text lines. We can
use a single SQL statement on one or multiple text line.<br>
• Using the SQL statements, you can perform most of the
actions in a database.<br>
• SQL depends on tuple relational calculus and relational
algebra.
• SQL stands for Structured Query Language.<br> It is
  used for storing and managing data in Relational
  Database Management System (RDBMS).<br>
  • It is a standard language for Relational DatabaseSystem.<br> It enables a user to create, read, updateand delete relational databases and tables.
  <br>• All the RDBMS like MySQL, Informix, Oracle,<br> MSAccess and SQL Server use SQL as their standarddatabase language.
  <br>• SQL allows users to query the database in a
  number of ways, using English-like statements.<br>
  • Structure query language is not case sensitive. Generally,
keywords of SQL are written in uppercase.<br>
• Statements of SQL are dependent on text lines. We can
use a single SQL statement on one or multiple text line.<br>
• Using the SQL statements, you can perform most of the
actions in a database.<br>
• SQL depends on tuple relational calculus and relational
algebra.</p>
  
    `);
  }

  ngOnInit(): void {
    
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
