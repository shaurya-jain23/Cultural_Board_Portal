# 🤝 Contributing to Cultural Board Portal

First off, thank you for considering contributing to the Cultural Board Portal! It's people like you that make this project such a great tool for the IIT Guwahati community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

---

## 📜 Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Examples of behavior that contributes to a positive environment:**

- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints and experiences
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards other community members

**Examples of unacceptable behavior:**

- ❌ The use of sexualized language or imagery
- ❌ Trolling, insulting/derogatory comments, and personal or political attacks
- ❌ Public or private harassment
- ❌ Publishing others' private information without explicit permission
- ❌ Other conduct which could reasonably be considered inappropriate

---

## 🎯 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g., Windows 10, macOS, Ubuntu]
- Browser: [e.g., Chrome 96, Firefox 94]
- Node Version: [e.g., 18.0.0]
- MongoDB Version: [e.g., 6.0.1]

**Additional context**
Add any other context about the problem here.
```

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

**Feature Request Template:**

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### 🔧 Contributing Code

1. **Good First Issues** - Look for issues labeled `good first issue`
2. **Help Wanted** - Check issues labeled `help wanted`
3. **Hacktoberfest** - During October, look for `hacktoberfest` labeled issues

---

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/Cultural_Board_Portal.git
cd Cultural_Board_Portal

# Add upstream remote
git remote add upstream https://github.com/swciitg/Cultural_Board_Portal.git
```

### 2. Set Up Development Environment

**Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm start
```

**Frontend Setup:**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your configuration
npm start
```

### 3. Verify Setup

- Backend should run on `http://localhost:3001`
- Frontend should run on `http://localhost:3000`
- Admin panel: `http://localhost:3001/cultural-board/api/admin`

---

## 🔄 Development Workflow

### 1. Keep Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Checkout your main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

### 2. Create a Feature Branch

```bash
# Create and checkout a new branch
git checkout -b feature/your-feature-name

# OR for bug fixes
git checkout -b fix/bug-description
```

**Branch Naming Convention:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### 3. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 4. Test Your Changes

**Backend Testing:**
```bash
cd backend
npm test
```

**Frontend Testing:**
```bash
cd frontend
npm test
```

**Manual Testing:**
- Test all affected features
- Check responsive design
- Verify browser compatibility
- Test admin panel functionality

### 5. Commit Your Changes

See [Commit Guidelines](#commit-guidelines) below.

---

## 📝 Coding Standards

### JavaScript/React Style Guide

**General Rules:**
- Use ES6+ syntax
- Use `const` and `let`, not `var`
- Use arrow functions where appropriate
- Use template literals for string concatenation

**React Specific:**
```javascript
// ✅ Good
import React from 'react';

const MyComponent = ({ title, data }) => {
  const [state, setState] = React.useState(null);
  
  React.useEffect(() => {
    // Effect logic
  }, [data]);
  
  return (
    <div className="my-component">
      <h1>{title}</h1>
    </div>
  );
};

export default MyComponent;
```

**Node.js/Express Specific:**
```javascript
// ✅ Good
import express from 'express';

export const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json({ success: true, data: clubs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
```

### Code Formatting

- **Indentation**: 2 spaces
- **Line Length**: Maximum 100 characters
- **Semicolons**: Required
- **Quotes**: Single quotes for strings
- **Trailing Commas**: Yes, for multi-line

### File Naming

- **Components**: PascalCase (e.g., `ClubCard.js`)
- **Utilities**: camelCase (e.g., `apiHelper.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_CONSTANTS.js`)
- **Styles**: kebab-case (e.g., `club-card.css`)

---

## 💬 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `Add` - New features or functionality
- `Fix` - Bug fixes
- `Update` - Updates to existing features
- `Refactor` - Code refactoring
- `Docs` - Documentation changes
- `Style` - Code style changes (formatting, missing semicolons, etc.)
- `Test` - Adding or updating tests
- `Chore` - Maintenance tasks

### Examples

```bash
# Good commit messages
Add: Club card hover animation
Fix: Image upload validation in admin panel
Update: Homepage carousel to show 5 images
Refactor: Extract API calls to separate service
Docs: Add API documentation for events endpoint
```

```bash
# Bad commit messages
update files
fixed bug
changes
asdfghjk
```

### Detailed Commit Example

```
Add: Event registration feature

- Add EventRegistration model
- Create registration API endpoints
- Add registration form component
- Implement email notification on registration
- Add tests for registration flow

Closes #123
```

---

## 🔀 Pull Request Process

### Before Submitting

- ✅ Your code follows the project's coding standards
- ✅ You've tested your changes thoroughly
- ✅ All tests pass
- ✅ Documentation is updated
- ✅ Commits follow the commit guidelines
- ✅ Branch is up to date with main

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran to verify your changes.

## Screenshots (if applicable)
Add screenshots to demonstrate the changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Related Issues
Closes #(issue number)
```

### Review Process

1. **Automated Checks** - CI/CD pipeline runs tests
2. **Code Review** - Maintainers review your code
3. **Feedback** - Address any requested changes
4. **Approval** - Once approved, your PR will be merged
5. **Celebration** - 🎉 Your contribution is now part of the project!

### After PR is Merged

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull upstream main

# Delete your feature branch (optional)
git branch -d feature/your-feature-name
```

---

## 🐛 Issue Guidelines

### Creating Issues

**Issue Title Format:**
```
[Type] Brief description
```

**Examples:**
- `[Bug] Image upload fails on admin panel`
- `[Feature] Add event registration functionality`
- `[Docs] Improve setup instructions in README`

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `hacktoberfest` - Hacktoberfest eligible
- `priority:high` - High priority issue
- `priority:medium` - Medium priority issue
- `priority:low` - Low priority issue

---

## 🌟 Community

### Getting Help

- 💬 **GitHub Discussions** - Ask questions and share ideas
- 📧 **Email** - swc@iitg.ac.in
- 🐛 **Issues** - Report bugs and request features

### Recognition

All contributors will be:
- Listed in our README
- Mentioned in release notes
- Part of our growing community!

### Communication Channels

- **Response Time** - We aim to respond within 48 hours
- **Meetings** - We don't have regular meetings, but major decisions are discussed in GitHub Discussions
- **Updates** - Follow the repository for updates

---

## 🎓 Learning Resources

### Recommended Reading

**React:**
- [React Official Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)

**Node.js:**
- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)

**MongoDB:**
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Docs](https://mongoosejs.com/docs/)

**Git:**
- [Git Book](https://git-scm.com/book/en/v2)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## 📜 License

By contributing to Cultural Board Portal, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

**Happy Contributing! 🚀**

---

<div align="center">

Made with ❤️ by [Student Web Committee, IIT Guwahati](https://github.com/swciitg)

</div>
