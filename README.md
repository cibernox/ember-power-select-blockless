# Ember-power-select-blockless

Blockless version of ember-power-select

## Instalation

`ember install ember-power-select-blockless`

## Usage

This component uses internally ember-power-select, but uses the `get` helper to render an attribute
of each option in the block

All options are the same than those in ember-power-select with the addition of a new one, `labelPath`,
which tells the component which attribute of each option should use to render each option of the list
as well as the content of the trigger.

```hbs
{{power-select-blockless options=users selected=user labelPath="name" onchange=(action (mut user))}}
```

Another refinemens is that by default the `searchField` will default to the value in `labelPath`, so
you don't need to specify it.