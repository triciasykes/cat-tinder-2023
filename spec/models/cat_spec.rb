require 'rails_helper'

RSpec.describe Cat, type: :model do
  it 'doesnt add cat without a name' do
    cat = Cat.create(age:6, enjoys:'eating a lot', image:'googe.com')
    expect(cat.errors[:name]).to_not be_empty
  end

  it 'doesnt add cat without an age' do
    cat = Cat.create(name:'Hugo', enjoys: 'reading by candlelight', image: 'google.com')
    expect(cat.errors[:age]).to_not be_empty
  end

  it 'doesnt add cat without enjoys' do
    cat = Cat.create(name:'Hugo', age:6, image:'google.com')
    expect(cat.errors[:enjoys]).to_not be_empty
  end

  it 'doesnt add cat without image' do
    cat = Cat.create(name:'Hugo', age: 6, enjoys:'eating by candlelight')
    expect(cat.errors[:image]).to_not be_empty
  end
end
