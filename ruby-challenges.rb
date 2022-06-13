# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.
#fruit_arr = ['Apple', 'Avocado', 'banana', 'Mango']
# def starts_with array, string 
#     array.select do |value|
#     value[0].downcase == string.downcase
#     end
# end
# p starts_with fruit_arr, 'B'


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
 def begins_with_array(array,string)
     expected_array = []
     array.each do |value|
        if value.include? string
            expected_array << value
        end
end
expected_array
end
     p begins_with_array beverages_array ,letter_o
     p begins_with_array beverages_array, letter_t
           
 
      



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.


# Expected output: 76


# Expected output: 100
  
nums_array1 = [42, 7, 27].reduce(:+)
nums_array2 = [25, 17, 47, 11].reduce(:+)
p nums_array1
p nums_array2


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
    class Bike
    def initialize
        @model = "Trek"
        @wheels = 2
        @speed = 0
    end
        
    def show_bike_info
     
     "The #{@model} bike has #{@wheels} wheels and is going #{@speed} mph."
    end
    def pedal_faster
        @speed += 10 
    end
    def brake
        @speed -= 5     
end
end
# You have to add a new thing in order to call the method. 
    p my_bike = Bike.new

    p my_bike.show_bike_info
    p my_bike.pedal_faster
    p my_bike.brake
    




# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# I figured this out but I would like to point out that the syllabus is confusing it doesn't specify that you have a new thing before you can call the method. 
# Followed example in syllabus not sure why I'm getting this error.


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.


# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
