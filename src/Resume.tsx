import { Container, Card, Text, Title, List, Divider, Stack } from '@mantine/core';

function Resume() {
  return (
    <Container id="start" size="sm" style={{ marginTop: 40 }}>
      <Card shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title ta="center" style={{ color: 'white' }}>Ethan J. Skinner</Title>
        <Text ta="center" style={{ color: 'gray' }}>
          173 Westchester Ave, Thornwood, New York | 914.272.5704 | ethanskinner004@gmail.com
        </Text>
      </Card>

      <Card id="summary" shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title order={3} style={{ color: 'white' }}>Professional Summary</Title>
        <Divider my="sm" color="gray" />
        <Text style={{ color: 'gray' }}>
          Motivated computer science student with hands-on experience in full-stack web development, cybersecurity, and collaborative
          software projects. Seeking internships or entry-level roles in software development or cybersecurity to apply and expand technical skills.
        </Text>
      </Card>

      <Card id="education" shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title order={3} style={{ color: 'white' }}>Education</Title>
        <Divider my="sm" color="gray" />
        <Text style={{ color: 'gray' }}>
          <strong>University of Connecticut, School of Engineering</strong><br />
          Bachelor of Science, Major: Computer Science - June 2026<br />
          <strong>Coursework:</strong> Data Structures, Object-Oriented Design, Systems Programming, Cybersecurity, Linear Algebra, Software Engineering, Algorithms and Complexity, Applied Statistics
        </Text>
      </Card>

      <Card id="projects" shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title order={3} style={{ color: 'white' }}>Projects</Title>
        <Divider my="sm" color="gray" />
        <Stack gap="xs">
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>React Website Application (May 24 - August 24)</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Developed a responsive web application using React.js, improving user engagement by 20%.</List.Item>
              <List.Item>Implemented dynamic UI features and form validation.</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>XSS Attack Website</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Simulated and mitigated cross-site scripting (XSS) attacks using JavaScript and security best practices.</List.Item>
              <List.Item>Used Python for hacking and TypeScript for input sanitization and security policies.</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>LaundryUconn (React Native) (May 24 - Current)</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Developing a campus-wide app to track laundry machine usage.</List.Item>
              <List.Item>Fixed and updated codebases for new laundry systems.</List.Item>
              <List.Item>Collaborated with 8 team members using Git for version control.</List.Item>
              <List.Item>Used Docker for cross-platform compatibility.</List.Item>
            </List>
          </div>
        </Stack>
      </Card>

      <Card id="experience" shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title order={3} style={{ color: 'white' }}>Leadership & Experience</Title>
        <Divider my="sm" color="gray" />
        <Stack gap="xs">
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>IEE – University of Connecticut (Sept 23 – February 24)</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Offered weekly feedback seminars on technology projects.</List.Item>
              <List.Item>Developed an Arduino project for a Christmas-themed light array.</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>Uconn Dev – University of Connecticut (February 24 - Current)</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Worked on websites, apps, and calculation tools.</List.Item>
              <List.Item>Provided design critiques and programming support.</List.Item>
              <List.Item>Taught and collaborated with peers on React, Python, and HTML.</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>Dining Service Employee – University of Connecticut (August 24 - Current)</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Worked in teams to maintain standard operating procedures.</List.Item>
              <List.Item>Quickly adapted to responsibilities alongside senior staff.</List.Item>
            </List>
          </div>
        </Stack>
      </Card>

      <Card id="skills" shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33' }}>
        <Title order={3} style={{ color: 'white' }}>Skills & Interests</Title>
        <Divider my="sm" color="gray" />
        <Text style={{ color: 'gray' }}>
          <strong>Skills:</strong> Lua, Python3, JavaScript, SQL, C++, Docker, Git, GitHub, AWS, React, Agile, Node.JS
        </Text>
        <Text style={{ color: 'gray' }}>
          <strong>Interests:</strong> Computers, Cybersecurity, Machine Learning, Artificial Intelligence, Blockchain
        </Text>
      </Card>
    </Container>
  );
}

export default Resume;
