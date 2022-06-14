import express from "express";

const router = express.Router();

const users = [
{
    id: 1,
    name: 'carmen electra',
    job: 'sales executive',
    image:
      'https://i.imgur.com/15Z1YVa.jpg',
    text:
      "Wonderful company! GREAT service. Zach answered all my questions and gave me several options to choose from. He was kind and informative. I’m so glad I called this company to get my supplements.",
  },
  {
    id: 2,
    name: 'ivan ivanovich',
    job: 'data scientist',
    image:
      'https://i.imgur.com/sbjVIvD.jpg',
    text:
      "Thanks for always giving me a head's up about my coming recurring order for Beta Glucan. You keep me healthy and confident. Thank you for your friendly care on the phone. God bless you all.",
  },
  {
    id: 3,
    name: 'anna jones',
    job: 'talent acquisition specialist',
    image:
      'https://i.imgur.com/4EACi0Y.jpg',
    text:
      "Having decided over a year ago to go onto the BWH Subscription service I have felt secure knowing that I would never run out of product. This has been a great relief to my mind. In my most recent order this past weekend I needed to make a change just before the order was scheduled to be shipped.",
  },
  {
    id: 4,
    name: 'johnny bravo',
    job: 'graphic designer',
    image:
      'https://i.imgur.com/snovgnr.jpg',
    text:
      "Love their products and their customer service - I received a phone call a couple weeks after my first purchase to see how things were going and if I had any questions - so awesome!!",
  },
  {
    id: 5,
    name: 'barbara palvin',
    job: 'personal trainer',
    image:
      'https://i.imgur.com/trl6zVV.jpg',
    text:
      "As always, the staff was very helpful. I was very excited to learn that I had enough reward points to get 2 free bottles of Beta Glucan 500. However, I was very disappointed to see the price increase. I take a lot of supplements and Beta Glucan is probably the most expensive"
 },
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router
