cats = [
  {
    name: 'Kevin',
    age: 9,
    enjoys: 'Talking to the dogs walking by',
    image: 'https://c2.peakpx.com/wallpaper/591/784/17/cat-animal-pet-cat-face-head-black-wallpaper-preview.jpg'
  },
  {
    name: 'Geppetto',
    age: 14,
    enjoys: 'Being outside in the sun',
    image: 'https://www.publicdomainpictures.net/pictures/200000/nahled/ragdoll-cat-with-green-eyes-14766395657Vf.jpg'
  },
  {
    name: 'Priscilla',
    age: 8,
    enjoys: 'Wanting attention from humans. Only humans.',
    image: 'https://petkeen.com/wp-content/uploads/2021/04/Blue-norwegian-forest-cat_Elisa-Putti_Shutterstock-760x507.jpg'
  },
  {
    name: 'Tuesday',
    age: 20,
    enjoys: 'Looking into your soul with my giant eyes.',
    image: 'https://c2.peakpx.com/wallpaper/296/908/856/cat-big-eyes-female-animal-fur-wallpaper-preview.jpg'
  }
]

cats.each do |cat|
  Cat.create cat
  puts "creating cat #{cat}"
end