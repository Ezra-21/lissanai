/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("fires the onClick handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Go</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Go" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("merges a custom className with the base classes", () => {
    render(<Button className="extra-class">X</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("extra-class");
    expect(btn.className).toContain("rounded-lg");
  });

  it("can be disabled", () => {
    render(<Button disabled>Nope</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});

describe("Badge", () => {
  it("renders content with default variant classes", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("bg-primary");
  });

  it("applies the destructive variant", () => {
    render(<Badge variant="destructive">Error</Badge>);
    expect(screen.getByText("Error").className).toContain("bg-destructive");
  });

  it("applies the outline variant", () => {
    render(<Badge variant="outline">Tag</Badge>);
    expect(screen.getByText("Tag").className).toContain("text-foreground");
  });
});

describe("Input", () => {
  it("renders and accepts typed text", () => {
    render(<Input placeholder="Email" />);
    const input = screen.getByPlaceholderText("Email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello@example.com" } });
    expect(input.value).toBe("hello@example.com");
  });

  it("forwards the type attribute", () => {
    render(<Input type="password" placeholder="pw" />);
    expect(screen.getByPlaceholderText("pw")).toHaveAttribute("type", "password");
  });

  it("can be disabled", () => {
    render(<Input placeholder="x" disabled />);
    expect(screen.getByPlaceholderText("x")).toBeDisabled();
  });
});

describe("Label", () => {
  it("renders its text", () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("associates with a control via htmlFor", () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText("Email")).toHaveAttribute("for", "email");
  });
});

describe("Textarea", () => {
  it("accepts multi-line input", () => {
    render(<Textarea placeholder="notes" />);
    const ta = screen.getByPlaceholderText("notes") as HTMLTextAreaElement;
    fireEvent.change(ta, { target: { value: "line one" } });
    expect(ta.value).toBe("line one");
  });

  it("can be disabled", () => {
    render(<Textarea placeholder="t" disabled />);
    expect(screen.getByPlaceholderText("t")).toBeDisabled();
  });
});

describe("Card", () => {
  it("renders the full card composition", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Title</CardTitle>
        </CardHeader>
        <CardContent>Body content</CardContent>
      </Card>
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("renders the title as a heading", () => {
    render(<CardTitle>Heading</CardTitle>);
    expect(screen.getByRole("heading", { name: "Heading" })).toBeInTheDocument();
  });
});
