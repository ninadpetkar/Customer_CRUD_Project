# Customer_CRUD_Project
CustmerDetails CRUD Project
# Tech Stack :
	Angular 4, Bootstrap
	.Net 4.5 framework and Web API 2.0
	Entity Framework on SQL 2017 (using DB first approach) 
	Unity Framework for DI

# CustomerDetails - Projects structure : 
	CustomerDetails - Web API (startup project)
	CustomerDetails.Tests - Unit Test project
	CustomerDetailsUI - Angular 4 UI project

# UI Validation - Form Validation : 
	1. First name is required and should be minimum 2 to 50 characters
	2. Second name is required and should be minimum 2 to 50 characters
	3. Email is required and should be should be in valid format.
	4. Phone number is required and should be in number.

# UI Validation - Other UI validation : 
	5. All, Active and Deactive counts are shown using child component. User can see the deactivated records using radio buttons.
		By default Active records are shown.
	6. All components are shown when only data from API is received.
	7. Active / Deactive on nested component, Can't edit and delete deactivated records.
	8. Populated 'Loading data' and 'No records found' messages correctly.
	9. Implemented common error handling.
	10. Bootstrap is used for styling.
	11. Data shared, managed and updated in singleton service at client side to reduce server calls.

# Server Validation :
	Use Partial class and DataAnnotations on Model for server side validation (similar to UI Form Validation)

# Details on Server side coding :
	3. Used Unity framework to resolve DI
	4. Used Async and await to support multi threading.
	5. Used soft delete
	6. Used IQueryable and implemented IDispose pattern. 

# Unit Test :
	Wrote 6 unit test cases.
	Mock Entity Framework 
			
Now open CustomerDetails.sln in Visual Studio and follow below steps.

# How to Run DB : 
	Get 'DBScript/CustomerDetails.sql' script files from solution, open and run #STEP wise on SQL Server manually
	Used Windows Authentication for DB
	Use below connection string
 
	<connectionStrings>
		<add name="CustomerContext" connectionString="metadata=res://*/CustomerModel.csdl|res://*/CustomerModel.ssdl|res://*/CustomerModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=CSNB0456\SQLEXPRESS;initial catalog=CustomerDataBase;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
	</connectionStrings>
	Note: Need to update 'data source=CSNB0456\SQLEXPRESS' from connection string in Web.Config file as per your current SQL settings.

# How to Run CustmerDetails - Web API : 
	Right click on solution and 'Restore Nuget Packages'
	Build the CustmerDetails solution
	Right click and click on View in Browser or click F5 (as CustmerDetails is startup project)
	Example: http://localhost:49848/api/customerdetails


# How to run UI application :
	Go to solution
	Expand CustomerDetailsUI project and right click on package.json
	Click Restore Packages
	Go to command prompt and navigate to your UI project folder
	Run below commands
		npm run build
		npm start
	Your angular project should start in browser. 
	I have mentioned port as 8000 in bs-config.json. you can change in case this port is alreay in use.
	Example: http://localhost:8000/contactList

# How to run Unit Test cases : 
	Build CustomerDetails.Tests project.
	Open Test explorer in solution.
	Search and get the test cases by class name 'CustomerDetailsTest'
	Right click on selected test and run the test.
	
In case of any issue in build/to run the project, please drop mail on below address. I am happy to help you
ninad.g.petkar@gmail.com
