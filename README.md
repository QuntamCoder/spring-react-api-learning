# Spring Boot CRUD API

A simple yet robust REST API built with Spring Boot that demonstrates basic CRUD (Create, Read, Update, Delete) operations. The frontend consumes these APIs using Axios for seamless data management.

## 🚀 Features

- Complete CRUD operations (Create, Read, Update, Delete)
- RESTful API endpoints
- Spring Boot backend with clean architecture
- Frontend integration using Axios
- JSON data exchange
- Error handling and validation
- Easy to extend and maintain

## 🛠️ Tech Stack

**Backend:**
- Java
- Spring Boot
- Spring Web
- Spring Data JPA (if using database)
- Maven/Gradle (build tool)

**Frontend:**
- React.js
- Axios for HTTP requests
- CSS/Styled Components (for styling)

**Database:**
- MySQL/PostgreSQL/H2 (specify your database)

## 📋 Prerequisites

Before running this project, make sure you have:

- Java 11 or higher installed
- Maven or Gradle installed
- Your preferred IDE (IntelliJ IDEA, Eclipse, VS Code)
- Database setup (if not using H2)
- Node.js and npm (for React dependencies)

## ⚙️ Installation & Setup

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Navigate to the backend directory
```bash
cd backend
```

3. Update database configuration in `application.properties`
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

4. Build and run the application
```bash
./mvnw clean install
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the React development server
```bash
npm start
```

The React app will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── studentapp/
│   └── src/
│       ├── main/
│       │   ├── java/
│       │   │   └── com/example/crud/
│       │   │       ├── controller/
│       │   │       ├── model/
│       │   │       ├── repository/
│       │   │       ├── service/
│       │   │       └── CrudApplication.java
│       │   └── resources/
│       │       └── application.properties
│       └── test/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## 🎯 How It Works

1. **Backend**: Spring Boot application exposes REST API endpoints for CRUD operations
2. **Frontend**: React.js application uses Axios to make HTTP requests to the backend APIs
3. **Data Flow**: User interactions in React components → Axios HTTP calls → Backend processes requests → Database operations → JSON response sent back to React components → UI updates

## 🔧 Configuration

You can customize the application by modifying:

- `application.properties` for database and server configuration
- Controller classes for API endpoints
- Model classes for data structure
- React components for UI functionality
- Axios service files for API calls

