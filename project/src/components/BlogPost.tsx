import React from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Heart, MessageCircle } from 'lucide-react';

interface BlogPostProps {
  postId: number;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack }) => {
  // In a real app, this would fetch the post data based on the ID
  const posts = {
    1: {
      id: 1,
      title: 'Learning Full-Stack Development as a CIS Student',
      excerpt: 'My journey from classroom theory to building real applications. How academic knowledge translates to practical development skills and the challenges I\'ve faced along the way.',
      date: '2024-01-15',
      readTime: '6 min read',
      tags: ['Learning', 'Full-Stack', 'Student Life'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `
        <p>When I first started my Computer Information Systems program, I thought I had a pretty good understanding of what programming was all about. I'd dabbled with HTML and CSS in high school, built a few simple websites, and felt confident that the transition from theory to practice would be smooth. I was wrong—but in the best possible way.</p>

        <h2>The Reality Check</h2>
        <p>My first real wake-up call came during my database design course. Sure, I understood the concepts of normalization and entity-relationship diagrams on paper, but when it came time to build an actual application that connected to a database, I realized there was a massive gap between knowing something theoretically and implementing it in the real world.</p>

        <p>The professor assigned us to build a simple inventory management system. Sounds straightforward, right? Create some tables, write some queries, build a basic interface. What I discovered was that every decision—from choosing the right data types to handling user input validation—required a deeper understanding than what our textbooks provided.</p>

        <h2>Bridging the Gap</h2>
        <p>The turning point came when I decided to go beyond the minimum requirements for our assignments. Instead of just completing the basic functionality, I started asking myself: "How would this work in a real business environment?" This shift in mindset changed everything.</p>

        <p>I began incorporating modern development practices into my coursework:</p>
        <ul>
          <li><strong>Version Control:</strong> Started using Git for all my projects, even the small ones</li>
          <li><strong>Code Documentation:</strong> Wrote comprehensive README files and inline comments</li>
          <li><strong>Error Handling:</strong> Implemented proper error handling instead of assuming everything would work perfectly</li>
          <li><strong>User Experience:</strong> Focused on creating intuitive interfaces, not just functional ones</li>
        </ul>

        <h2>The Learning Curve</h2>
        <p>One of the biggest challenges was learning to think like a full-stack developer. In class, we often work on isolated problems—a database exercise here, a programming assignment there. But real applications require you to understand how all these pieces fit together.</p>

        <p>My breakthrough project was a simple task management application I built for myself. It wasn't assigned coursework; it was just something I needed. But building it from scratch—designing the database schema, creating the API endpoints, building the frontend interface, and deploying it—taught me more about full-stack development than any single course could.</p>

        <h2>Key Lessons Learned</h2>
        <p>Looking back on this journey, here are the most important lessons I've learned:</p>

        <h3>1. Start with the User</h3>
        <p>Academic projects often focus on demonstrating technical concepts, but real applications need to solve actual problems. Always start by understanding who will use your application and what they're trying to accomplish.</p>

        <h3>2. Embrace the Debugging Process</h3>
        <p>In school, when something doesn't work, you might get partial credit for showing your work. In real development, it either works or it doesn't. Learning to systematically debug issues has been one of my most valuable skills.</p>

        <h3>3. Documentation is Your Friend</h3>
        <p>I used to think documentation was just busy work. Now I realize it's essential for maintaining and scaling applications. Future you will thank present you for writing clear, comprehensive documentation.</p>

        <h3>4. Learn by Building</h3>
        <p>You can read about frameworks and best practices all day, but nothing replaces the experience of building something from scratch. Start small, but start building.</p>

        <h2>Looking Forward</h2>
        <p>I'm still learning, still making mistakes, and still discovering new aspects of development that I never knew existed. But that's what makes this field so exciting. Every project teaches me something new, and every challenge makes me a better developer.</p>

        <p>For other CIS students reading this: don't be afraid to go beyond the curriculum. Build things that interest you, even if they're not perfect. The gap between academic knowledge and practical skills is real, but it's also bridgeable with curiosity, persistence, and a willingness to learn from failure.</p>

        <p>The journey from student to developer isn't just about accumulating technical knowledge—it's about learning to think like a problem solver, to see the big picture while managing the details, and to build things that actually matter to people.</p>
      `
    },
    2: {
      id: 2,
      title: 'Why I Chose Computer Information Systems',
      excerpt: 'The decision between Computer Science and CIS, and why I believe CIS offers the perfect blend of technical skills and business understanding.',
      date: '2024-01-08',
      readTime: '4 min read',
      tags: ['Career', 'Education', 'CIS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `
        <p>When I was deciding on my college major, I faced the same dilemma that many tech-interested students encounter: Computer Science or Computer Information Systems? Both seemed to lead to similar career paths, but the more I researched, the more I realized they represent fundamentally different approaches to technology.</p>

        <h2>The Great Debate</h2>
        <p>Computer Science is often seen as the "pure" technical path—heavy on algorithms, mathematics, and theoretical foundations. Computer Information Systems, on the other hand, focuses on applying technology to solve business problems. Some people view CIS as "CS-lite," but I've come to believe that's a fundamental misunderstanding of what CIS actually offers.</p>

        <h2>Why I Chose CIS</h2>
        <p>My decision came down to how I wanted to use technology in my career. While I love programming and technical problem-solving, I'm equally fascinated by how technology can transform businesses and improve people's work lives. CIS offered me the perfect blend of both worlds.</p>

        <h3>Business Context Matters</h3>
        <p>One of the biggest advantages of the CIS curriculum is that it teaches you to think about technology in context. It's not enough to build something that works—you need to build something that solves a real business problem, fits within budget constraints, and can be maintained by a team.</p>

        <p>In my systems analysis course, we don't just learn about database design in abstract terms. We learn how to interview stakeholders, understand business requirements, and translate those requirements into technical specifications. These are skills that pure CS programs often don't emphasize.</p>

        <h3>The Communication Advantage</h3>
        <p>CIS programs typically include more courses on communication, project management, and business processes. This might seem less "technical," but I've found these skills incredibly valuable. Being able to explain technical concepts to non-technical stakeholders is a superpower in the workplace.</p>

        <h2>What I'm Learning</h2>
        <p>My CIS curriculum covers a broad range of topics:</p>
        <ul>
          <li><strong>Programming:</strong> Multiple languages including Java, Python, and JavaScript</li>
          <li><strong>Database Management:</strong> Design, implementation, and optimization</li>
          <li><strong>Systems Analysis:</strong> Requirements gathering and system design</li>
          <li><strong>Project Management:</strong> Agile methodologies and team leadership</li>
          <li><strong>Business Intelligence:</strong> Data analytics and decision support systems</li>
          <li><strong>Cybersecurity:</strong> Risk assessment and security implementation</li>
        </ul>

        <h2>The Best of Both Worlds</h2>
        <p>What I love about CIS is that it doesn't sacrifice technical depth for business knowledge—it integrates them. When I'm learning about database optimization, I'm also learning about the business impact of slow queries. When I'm studying cybersecurity, I'm considering both technical vulnerabilities and business risk.</p>

        <h2>Career Prospects</h2>
        <p>The career paths for CIS graduates are incredibly diverse. I could become a:</p>
        <ul>
          <li>Business Analyst</li>
          <li>Systems Administrator</li>
          <li>Database Administrator</li>
          <li>IT Project Manager</li>
          <li>Software Developer</li>
          <li>Cybersecurity Specialist</li>
          <li>Data Analyst</li>
        </ul>

        <p>This flexibility is exactly what I was looking for. I don't have to commit to a single career path right now—I can explore different areas and see what resonates with me.</p>

        <h2>Addressing the Misconceptions</h2>
        <p>Some people think CIS is easier than CS, but that hasn't been my experience. The coursework is challenging, just in different ways. Instead of spending time on advanced calculus and theoretical computer science, I'm learning about enterprise architecture and business process modeling. Both are complex, but they serve different purposes.</p>

        <p>The technical rigor is still there—I'm writing just as much code as my CS friends, but I'm also learning to evaluate that code in terms of business value, maintainability, and user impact.</p>

        <h2>Looking Ahead</h2>
        <p>As I approach graduation, I feel confident that CIS was the right choice for me. I have the technical skills to build robust applications, but I also have the business acumen to understand why those applications matter and how they fit into larger organizational goals.</p>

        <p>The technology industry needs people who can bridge the gap between technical possibility and business reality. That's exactly what CIS has prepared me to do, and I couldn't be more excited about the opportunities ahead.</p>
      `
    },
    3: {
      id: 3,
      title: 'Building My First Database-Driven Application',
      excerpt: 'Lessons learned from designing and implementing a complete web application with user authentication, data persistence, and a clean UI.',
      date: '2023-12-22',
      readTime: '5 min read',
      tags: ['Projects', 'Database', 'Web Development'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `
        <p>For my database management course final project, I decided to build something more ambitious than the typical student information system or library catalog. I wanted to create a real application that I would actually use: a personal expense tracker with budgeting features.</p>

        <h2>The Planning Phase</h2>
        <p>Before writing a single line of code, I spent considerable time planning the application architecture. This was my first experience with proper system design, and I quickly learned why this phase is so crucial.</p>

        <h3>Database Design</h3>
        <p>I started with an Entity-Relationship diagram, identifying the core entities:</p>
        <ul>
          <li><strong>Users:</strong> Authentication and profile information</li>
          <li><strong>Categories:</strong> Expense categories (Food, Transportation, etc.)</li>
          <li><strong>Transactions:</strong> Individual income and expense records</li>
          <li><strong>Budgets:</strong> Monthly budget limits for each category</li>
        </ul>

        <p>The relationships between these entities were more complex than I initially anticipated. For example, I had to decide whether categories should be user-specific or global, how to handle recurring transactions, and how to structure the data for efficient reporting.</p>

        <h2>Technical Stack</h2>
        <p>I chose technologies that would give me full-stack experience:</p>
        <ul>
          <li><strong>Backend:</strong> Node.js with Express.js</li>
          <li><strong>Database:</strong> PostgreSQL</li>
          <li><strong>Frontend:</strong> React with Material-UI</li>
          <li><strong>Authentication:</strong> JWT tokens</li>
          <li><strong>Deployment:</strong> Heroku (for learning purposes)</li>
        </ul>

        <h2>Key Challenges and Solutions</h2>

        <h3>1. User Authentication</h3>
        <p>Implementing secure user authentication was more complex than I expected. I had to learn about password hashing, JWT tokens, and secure session management. The biggest lesson was understanding the difference between authentication (who you are) and authorization (what you can do).</p>

        <h3>2. Data Validation</h3>
        <p>I learned the hard way that you can never trust user input. Implementing proper validation on both the frontend and backend was crucial. I used Joi for server-side validation and built custom validation hooks for the React components.</p>

        <h3>3. Database Performance</h3>
        <p>As I added more test data, I noticed some queries were becoming slow. This led me to learn about database indexing, query optimization, and the importance of analyzing execution plans. Adding proper indexes to frequently queried columns made a dramatic difference.</p>

        <h3>4. State Management</h3>
        <p>Managing application state in React was initially overwhelming. I started with simple useState hooks but eventually implemented the Context API for global state management. This taught me valuable lessons about when to lift state up and when to keep it local.</p>

        <h2>Features Implemented</h2>
        <p>The final application included:</p>
        <ul>
          <li>User registration and authentication</li>
          <li>Transaction entry with category assignment</li>
          <li>Monthly budget setting and tracking</li>
          <li>Visual reports with charts and graphs</li>
          <li>Data export functionality</li>
          <li>Responsive design for mobile use</li>
        </ul>

        <h2>What I Learned</h2>

        <h3>Database Design is Critical</h3>
        <p>Getting the database schema right from the beginning saves enormous amounts of time later. I had to refactor my schema twice during development, which taught me the importance of thorough planning.</p>

        <h3>Error Handling is Essential</h3>
        <p>In academic exercises, we often assume everything will work perfectly. Real applications need robust error handling at every level—database errors, network failures, invalid user input, and unexpected edge cases.</p>

        <h3>User Experience Matters</h3>
        <p>Building a functional application is only half the battle. Making it intuitive and pleasant to use requires careful attention to UI/UX design. I spent almost as much time on the interface as I did on the backend logic.</p>

        <h3>Testing is Not Optional</h3>
        <p>I initially skipped writing tests to save time, but bugs kept creeping in as I added features. Learning to write unit tests and integration tests actually sped up development by catching issues early.</p>

        <h2>The Deployment Experience</h2>
        <p>Deploying to Heroku was my first experience with production deployment. I learned about environment variables, database migrations, and the differences between development and production environments. Seeing my application running live on the internet was incredibly rewarding.</p>

        <h2>Reflection</h2>
        <p>This project taught me more about software development than any single course could. The experience of building something from scratch—dealing with real problems, making architectural decisions, and seeing users (even if just my classmates) interact with my application—was invaluable.</p>

        <p>The most important lesson was that building software is as much about problem-solving and decision-making as it is about coding. Every feature requires dozens of small decisions, and those decisions compound to create the overall user experience.</p>

        <p>I'm now working on version 2.0 of the application, incorporating lessons learned and adding features like data visualization and mobile app support. The journey from idea to deployed application has given me confidence that I can tackle any development challenge that comes my way.</p>
      `
    },
    4: {
      id: 4,
      title: 'The Importance of Soft Skills in Tech',
      excerpt: 'Why communication, teamwork, and problem-solving skills are just as important as coding ability in the technology industry.',
      date: '2023-12-10',
      readTime: '4 min read',
      tags: ['Soft Skills', 'Career Development', 'Technology'],
      image: 'https://images.pexels.com/photos/5849568/pexels-photo-5849568.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `
        <p>When I first started my CIS program, I was laser-focused on learning programming languages, mastering database design, and understanding system architecture. I thought success in tech was purely about technical competence. Two years in, I've realized that soft skills are not just important—they're often what separates good technologists from great ones.</p>

        <h2>The Wake-Up Call</h2>
        <p>My perspective shifted during a group project in my systems analysis course. Our team was tasked with designing a solution for a local nonprofit organization. We had all the technical skills needed, but we struggled to understand what the client actually wanted. Our initial solution was technically impressive but completely missed the mark on usability and business requirements.</p>

        <p>The project succeeded only after we learned to ask better questions, listen more carefully, and communicate our ideas in terms the client could understand. That experience taught me that technical skills get you in the door, but soft skills determine how far you'll go.</p>

        <h2>Communication: The Universal Skill</h2>
        <p>In every tech role, you're constantly communicating—with users, stakeholders, team members, and often people who don't share your technical background. The ability to explain complex concepts in simple terms is incredibly valuable.</p>

        <h3>Written Communication</h3>
        <p>So much of our work involves written communication: documentation, code comments, email updates, project proposals. Clear, concise writing saves time and prevents misunderstandings. I've started treating every piece of documentation as if it will be read by someone who knows nothing about the project.</p>

        <h3>Verbal Communication</h3>
        <p>Whether you're presenting a project proposal, explaining a technical issue, or participating in a code review, verbal communication skills are essential. I've been working on structuring my thoughts before speaking and using analogies to make technical concepts more accessible.</p>

        <h2>Teamwork and Collaboration</h2>
        <p>Software development is rarely a solo activity. Even when you're coding alone, you're building on frameworks created by others, using libraries maintained by teams, and creating solutions that will be used and maintained by colleagues.</p>

        <h3>Code Reviews</h3>
        <p>Participating in code reviews has taught me that giving and receiving feedback is an art. It's not just about finding bugs—it's about sharing knowledge, maintaining code quality, and helping team members grow. Learning to give constructive feedback and receive criticism gracefully has made me a better developer and teammate.</p>

        <h3>Conflict Resolution</h3>
        <p>Technical disagreements are inevitable. Should we use this framework or that one? How should we structure this database? I've learned that these discussions are most productive when they focus on trade-offs and business requirements rather than personal preferences.</p>

        <h2>Problem-Solving Beyond Code</h2>
        <p>Technical problem-solving is important, but business problem-solving is equally crucial. Understanding the "why" behind a project helps you build better solutions and make smarter technical decisions.</p>

        <h3>Critical Thinking</h3>
        <p>Before jumping into implementation, I now spend time understanding the problem space. What are we really trying to solve? Who are the users? What are the constraints? This upfront thinking often reveals simpler solutions or highlights potential issues early.</p>

        <h3>Adaptability</h3>
        <p>Technology changes rapidly, and requirements evolve throughout projects. Being able to adapt—whether it's learning a new framework, adjusting to changing requirements, or pivoting when an approach isn't working—is essential for long-term success.</p>

        <h2>Leadership and Initiative</h2>
        <p>Even as a student, I've found opportunities to demonstrate leadership. Whether it's taking initiative on group projects, mentoring newer students, or proposing improvements to existing processes, these experiences have been incredibly valuable.</p>

        <h3>Taking Ownership</h3>
        <p>I've learned to take ownership not just of my code, but of the problems I'm solving. This means thinking about edge cases, considering the user experience, and following through on commitments. It's the difference between completing an assignment and delivering a solution.</p>

        <h2>Emotional Intelligence</h2>
        <p>Working in tech means dealing with frustration—debugging complex issues, managing competing priorities, working under pressure. Emotional intelligence helps you stay productive during stressful times and maintain positive relationships with colleagues.</p>

        <h3>Empathy</h3>
        <p>Understanding the perspectives of users, stakeholders, and team members leads to better solutions. When I'm designing a user interface, I try to think about the user's context and goals. When I'm working with team members, I consider their workload and expertise level.</p>

        <h2>Developing Soft Skills</h2>
        <p>Unlike technical skills, soft skills can be harder to measure and develop systematically. Here's what has worked for me:</p>

        <ul>
          <li><strong>Seek Feedback:</strong> Regularly ask professors, teammates, and mentors for feedback on communication and collaboration</li>
          <li><strong>Practice Presenting:</strong> Volunteer for presentations and practice explaining technical concepts to non-technical audiences</li>
          <li><strong>Join Teams:</strong> Participate in group projects, hackathons, and student organizations</li>
          <li><strong>Read Widely:</strong> Books on communication, leadership, and business help develop perspective beyond technical topics</li>
          <li><strong>Reflect:</strong> After projects or challenging situations, think about what went well and what could be improved</li>
        </ul>

        <h2>The Competitive Advantage</h2>
        <p>As I prepare for internships and eventual full-time employment, I'm realizing that soft skills are often what differentiate candidates. Many people can write code, but fewer can effectively communicate with stakeholders, lead projects, and solve complex business problems.</p>

        <p>The most successful technologists I've met aren't necessarily the ones with the deepest technical knowledge—they're the ones who can combine technical competence with strong communication, collaboration, and problem-solving skills.</p>

        <p>Investing in soft skills isn't just about career advancement—it makes the work more enjoyable and meaningful. When you can effectively collaborate with others and clearly communicate your ideas, technology becomes a tool for solving real problems and making a positive impact.</p>
      `
    }
  };

  const post = posts[postId as keyof typeof posts];

  if (!post) {
    return (
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Post Not Found</h1>
          <button 
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Thoughts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Thoughts</span>
        </button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center space-x-1 text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <Tag size={14} />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-slate-600">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-slate-600 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                  <span className="text-sm">24</span>
                </button>
                <button className="flex items-center space-x-1 text-slate-600 hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} />
                  <span className="text-sm">8</span>
                </button>
                <button className="text-slate-600 hover:text-slate-800 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 text-slate-700 leading-relaxed"
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                CI
              </div>
              <div>
                <div className="font-semibold text-slate-800">Caden Ice</div>
                <div className="text-sm text-slate-600">CIS Student & Aspiring Developer</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Heart size={16} />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </footer>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">More Thoughts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(posts)
              .filter(p => p.id !== postId)
              .slice(0, 2)
              .map(relatedPost => (
                <div 
                  key={relatedPost.id}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <img 
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;