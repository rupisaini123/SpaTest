using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorApp3.Controls
{
    public class InputValidationBase : ComponentBase
    {
        [Parameter]
        public string Value { get; set; }

        [Parameter]
        public EventCallback<string> ValueChanged { get; set; }
        protected async void inputChange(ChangeEventArgs eventArgs)
        {
            await ValueChanged.InvokeAsync(eventArgs.Value.ToString());
        }
    }
}
