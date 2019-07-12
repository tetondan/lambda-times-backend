const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log('Server running on port 8080');
});

server.get('/topics', (req, res) => {
  res.status(200).json({
    topics: ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js']
  });
});

server.get('/articles', (req, res) => {
  res.status(200).json({
    articles: {
      javascript: [
        {
          headline:
            'ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects',
          authorPhoto: './assets/sir.jpg',
          authorName: "SIR RUFF'N'STUFF"
        },
        {
          headline:
            'Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences',
          authorPhoto: './assets/bones.jpg',
          authorName: 'BONES R. LIFE'
        },
        {
          headline:
            "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
          authorPhoto: './assets/puppers.jpg',
          authorName: 'PUPPER S. DOGGO'
        },
        {
          headline:
            'Typescript: Ten Things you Should Know Before Building Your Next Angular Application',
          authorPhoto: './assets/sir.jpg',
          authorName: "SIR RUFF'N'STUFF"
        }
      ],
      bootstrap: [
        {
          headline: 'Bootstrap 5: Get a Sneak Peak at all the New Features',
          authorPhoto: './assets/fido.jpg',
          authorName: 'FIDO WALKSALOT'
        },
        {
          headline:
            'UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)',
          authorPhoto: './assets/max.jpg',
          authorName: 'MAX GOODBOYE'
        },
        {
          headline:
            'The Hottest New Bootstrap 4 Components Every Developer Needs to Know About',
          authorPhoto: './assets/max.jpg',
          authorName: 'MAX GOODBOYE'
        }
      ],
      technology: [
        {
          headline: 'AI: What Are the Ethical Ramifications of the Future?',
          authorPhoto: './assets/max.jpg',
          authorName: 'MAX GOODBOYE'
        },
        {
          headline:
            'AR or VR: How We Will See the World Through a Digital Lense',
          authorPhoto: './assets/max.jpg',
          authorName: 'MAX GOODBOYE'
        },
        {
          headline:
            'Quantum Computing: Where we Are Now, and Where We Will Be Very Soon',
          authorPhoto: './assets/max.jpg',
          authorName: 'MAX GOODBOYE'
        }
      ],
      jquery: [
        {
          headline: 'History of Javascript Libraries: from jQuery to React',
          authorPhoto: './assets/puppers.jpg',
          authorName: 'PUPPER S. DOGGO'
        },
        {
          headline:
            'jQuery Animations: When and Where to Use Them, and Not CSS',
          authorPhoto: './assets/fido.jpg',
          authorName: 'FIDO WALKSALOT'
        },
        {
          headline:
            'Why I Use jQuery in Every Application I Create and Why You Should Too',
          authorPhoto: './assets/fido.jpg',
          authorName: 'FIDO WALKSALOT'
        }
      ],
      node: [
        {
          headline: 'Node.js in 2018: Which Framework? Express, Sails, Hapi?',
          authorPhoto: './assets/sir.jpg',
          authorName: "SIR RUFF'N'STUF"
        },
        {
          headline: 'MongoDB: NoSQL vs. SQL, the Debate Continues..',
          authorPhoto: './assets/bones.jpg',
          authorName: 'BONES R. LIFE'
        }
      ]
    }
  });
});
