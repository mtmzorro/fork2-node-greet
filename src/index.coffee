greet = {}
greet.init = (name, drunk) ->
  @name = name
  @drunk = drunk
  result = @say()
  result

greet.say = ->
  if @name.length is 0
    "what you name?"
  else
    if @drunk
      "hello " + @name + ", you look sexy today"
    else
      "hello, " + @name

module.exports = greet