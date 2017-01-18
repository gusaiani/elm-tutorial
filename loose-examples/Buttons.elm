import Html exposing (beginnerProgram, div, button, text)
import Html.Events exposing (onClick)

main : Program Never Int Msg
main =
  beginnerProgram { model = 0, view = view, update = update }

view : a -> Html.Html Msg
view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (toString model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]

type Msg = Increment | Decrement

update : Msg -> Int -> Int
update msg model =
  case msg of
    Increment ->
      model + 1
    Decrement ->
      model - 1
