﻿using System;

namespace Fur.Validation.Attributes
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
    public sealed class NonVaildateAttribute : Attribute
    {
    }
}